# -*- coding:UTF-8 -*-
from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from mptt.admin import DraggableMPTTAdmin
from feincms.module.page.models import Page
import datetime
from django.utils.html import format_html
from AppModel import *
from ckeditor.fields import RichTextField


class ApartmentInfo(models.Model):
      pass

class BuildingInfo(models.Model):
      pass

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
      content = RichTextField()

class TeamInfo(models.Model):
      team_name = models.CharField(max_length=200,verbose_name='厂房名称')
      team_address = models.CharField(max_length=200,verbose_name='地点')
      team_longitude = models.CharField(max_length=200,verbose_name='经度')
      team_latitude = models.CharField(max_length=200,verbose_name='纬度')

# 组织机构
class Category(MPTTModel):
      name = models.CharField(max_length=50, unique=True,verbose_name='单位/科室名称')
      parent = TreeForeignKey('self', null=True, blank=True,on_delete=models.CASCADE, related_name='children', db_index=True,verbose_name='上级部门')
      responsibilities = models.CharField(max_length=50,verbose_name='职责',default="-")
      longitude = models.CharField(max_length=200,verbose_name='经度',default="-")
      latitude = models.CharField(max_length=200,verbose_name='纬度',default="-")
      address = models.CharField(max_length=200,verbose_name='地址',default="-")
      phone_number = models.CharField(max_length=50,verbose_name='联系电话',default="-")
      slug = models.SlugField(verbose_name='标签')
      
    
      class MPTTMeta:
        order_insertion_by = ['name']
    
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

class UserInfo(models.Model):
    AUTH_CHOICES = [
    ('0', '员工'),
    ('1', '主管'),
    ('2', '主任'),
    ('3', '管理员'),
    ]
    nick_name = models.CharField(max_length=200,verbose_name='微信名')
    user_name = models.CharField(max_length=200,verbose_name='用户名')
    weixin_openid = models.CharField(max_length=200,verbose_name='微信ID')
    phone_number = models.CharField(max_length=200,verbose_name='手机号')
    auth = models.CharField(max_length=200, choices=AUTH_CHOICES,verbose_name='用户权限')
    address = models.CharField(max_length=200,verbose_name='常用地址')

    class Meta:
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息'
    
    def __str__(self):
        return self.user_name