# -*- coding:UTF-8 -*-
from django.contrib import admin
from AppModel.models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin, ImportExportActionModelAdmin, ExportActionModelAdmin
import logging,json,datetime
from django.utils.html import format_html
from django import forms
from mptt.admin import MPTTModelAdmin
from mptt.admin import DraggableMPTTAdmin
from feincms.module.page.models import Page
from django.utils.html import format_html,escape, mark_safe
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages
import time
import decimal


logger = logging.getLogger(__name__)
logger.setLevel(level = logging.DEBUG)
handler = logging.FileHandler("tjctwl.log")
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

class FactoryImageInline(admin.TabularInline):
    model = FactoryImage
    extra = 2

# 厂房管理
@admin.register(FactoryInfo)
class FactoryInfoAdmin(admin.ModelAdmin): 
    inlines = [ FactoryImageInline, ]
    list_display=['id','title','title_img','latitude','longitude','tel','address','article_url','info','name']
    search_fields =('title','title_img','latitude','longitude','tel','address','article_url','info','name')
    fieldsets = [
       ('用户数据', {'fields': ['title','title_img','latitude','longitude','tel','address','article_url','info','name'], 'classes': ['']}),
    ]
    list_per_page = 15


# 公寓管理
@admin.register(ApartmentInfo)
class ApartmentInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','apartment_region','title','title_img','latitude','longitude','tel','address','article_url']
    search_fields =('apartment_region','title','title_img','latitude','longitude','tel','address','article_url')
    fieldsets = [
       ('用户数据', {'fields': ['apartment_region','title','title_img','latitude','longitude','tel','address','article_url'], 'classes': ['']}),
    ]
    list_per_page = 15

# 公寓管理
@admin.register(BannerInfo)
class BannerInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','banner_image',]
    search_fields =('banner_image',)
    fieldsets = [
       ('用户数据', {'fields': ['banner_image'], 'classes': ['']}),
    ]
    list_per_page = 10


# 楼宇管理
@admin.register(BuildingInfo)
class BuildingInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','building_region','title','title_img','latitude','longitude','tel','address','article_url']
    search_fields =('building_region','title','title_img','latitude','longitude','tel','address','article_url')
    fieldsets = [
       ('用户数据', {'fields': ['building_region','title','title_img','latitude','longitude','tel','address','article_url'], 'classes': ['']}),
    ]
    list_per_page = 15


# 链接管理
@admin.register(UrlInfo)
class UrlInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','url_name','url_type','url_address']
    search_fields =('url_name','url_type','url_address')
    fieldsets = [
       ('用户数据', {'fields': ['url_name','url_type','url_address'], 'classes': ['']}),
    ]
    list_per_page = 15

admin.site.register(Category , MPTTModelAdmin)


admin.site.site_title = "泰达投资"
admin.site.site_header = "泰达投资"


