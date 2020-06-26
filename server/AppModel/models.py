# -*- coding:UTF-8 -*-
from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from mptt.admin import DraggableMPTTAdmin
from feincms.module.page.models import Page
import datetime
from django.utils.html import format_html
from AppModel import *
from ckeditor.fields import RichTextField


#公寓类
class ApartmentInfo(models.Model):
      apartment_region = models.CharField(max_length=200,verbose_name='区域')
      title = models.CharField(max_length=200,verbose_name='标题')
      title_img = models.ImageField(u'标题图片',null=True, blank=True, upload_to='title_image')
      latitude  = models.CharField(max_length=200,verbose_name='经度')
      longitude  = models.CharField(max_length=200,verbose_name='纬度')
      tel = models.CharField(max_length=200,verbose_name='电话')
      address = models.CharField(max_length=200,verbose_name='地址')
      article_url = models.CharField(max_length=200,verbose_name='链接')

      class Meta:
            verbose_name = '公寓信息'
            verbose_name_plural = '公寓信息'
    
      def __str__(self):
          return self.apartment_title


#楼宇类
class BuildingInfo(models.Model):
      building_region = models.CharField(max_length=200,verbose_name='区域')
      building_title = models.CharField(max_length=200,verbose_name='标题')
      building_phone = models.CharField(max_length=200,verbose_name='电话')
      building_address = models.CharField(max_length=200,verbose_name='地址')
      building_url = models.CharField(max_length=200,verbose_name='链接')

      class Meta:
            verbose_name = '楼宇信息'
            verbose_name_plural = '楼宇信息'
    
      def __str__(self):
          return self.building_title

class BannerInfo(models.Model):
      banner_image = models.ImageField(u'轮播图片',null=True, blank=True, upload_to='banner_image')

# 厂房类
class FactoryInfo(models.Model):
      factory_name = models.CharField(max_length=200,verbose_name='厂房名称')
      factory_area = models.CharField(max_length=200,verbose_name='建筑面积m2')
      factory_footprint = models.CharField(max_length=200,verbose_name='占地面积m2')
      factory_address = models.CharField(max_length=200,verbose_name='地点')
      factory_longitude = models.CharField(max_length=200,verbose_name='经度')
      factory_latitude = models.CharField(max_length=200,verbose_name='纬度')
      factory_level = models.CharField(max_length=200,verbose_name='层数')
      factory_high = models.CharField(max_length=200,verbose_name='层高')
      factory_finish_time = models.CharField(max_length=200,verbose_name='建成时间')
      factory_desc = models.CharField(max_length=200,verbose_name='备注')
      factory_user = models.CharField(max_length=200,verbose_name='联系人')
      factory_phone_num = models.CharField(max_length=200,verbose_name='联系电话')

      class Meta:
            verbose_name = '厂房信息'
            verbose_name_plural = '厂房信息'
    
      def __str__(self):
          return self.factory_name


class TeamInfo(models.Model):
      team_name = models.CharField(max_length=200,verbose_name='团队名称')
      team_address = models.CharField(max_length=200,verbose_name='地点')
      team_longitude = models.CharField(max_length=200,verbose_name='经度')
      team_latitude = models.CharField(max_length=200,verbose_name='纬度')

# 组织机构
class Category(MPTTModel):
      name = models.CharField(max_length=50, unique=True,verbose_name='单位/科室名称')
      parent = TreeForeignKey('self', null=True, blank=True,on_delete=models.CASCADE, related_name='children', db_index=True,verbose_name='上级部门')
      longitude = models.CharField(max_length=200,verbose_name='经度',default="-")
      latitude = models.CharField(max_length=200,verbose_name='纬度',default="-")
      address = models.CharField(max_length=200,verbose_name='地址',default="-")
      phone_number = models.CharField(max_length=50,verbose_name='联系电话',default="-")
      slug = models.SlugField(verbose_name='标签')
      responsibilities = RichTextField(verbose_name='职责')
      
    
      class MPTTMeta:
        order_insertion_by = ['slug']
    
      class Meta:
        unique_together = (('parent', 'slug',))
        verbose_name_plural = 'categories'
        verbose_name = '组织机构'
    
      def get_slug_list(self):
        try:
          ancestors = self.get_ancestors(include_self=True)
        except:
          ancestors = []
        else:
          ancestors = [ i.slug for i in ancestors]
        slugs = []
        for i in range(len(ancestors)):
          slugs.append('/'.join(ancestors[:i+1]))
        return slugs
    
      def __str__(self):
        return self.name


# 链接类
class UrlInfo(models.Model):
      url_name = models.CharField(max_length=200,verbose_name='链接名称')
      url_type = models.CharField(max_length=200,verbose_name='链接类型')
      url_address = models.CharField(max_length=200,verbose_name='链接地址')

      class Meta:
            verbose_name = '链接信息'
            verbose_name_plural = '链接信息'
    
      def __str__(self):
          return self.url_name