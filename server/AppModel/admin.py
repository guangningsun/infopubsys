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


# 厂房管理
@admin.register(FactoryInfo)
class FactoryInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num']
    search_fields =('factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num')
    fieldsets = [
       ('用户数据', {'fields': ['factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num'], 'classes': ['']}),
    ]
    list_per_page = 15


# 公寓管理
@admin.register(ApartmentInfo)
class ApartmentInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','apartment_region','apartment_title','apartment_phone','apartment_address','apartment_url']
    search_fields =('apartment_region','apartment_title','apartment_phone','apartment_address','apartment_url')
    fieldsets = [
       ('用户数据', {'fields': ['apartment_region','apartment_title','apartment_phone','apartment_address','apartment_url'], 'classes': ['']}),
    ]
    list_per_page = 15


# 楼宇管理
@admin.register(BuildingInfo)
class BuildingInfoAdmin(ImportExportModelAdmin): 
    list_display=['id','building_region','building_title','building_phone','building_address','building_url']
    search_fields =('building_region','building_title','building_phone','building_address','building_url')
    fieldsets = [
       ('用户数据', {'fields': ['building_region','building_title','building_phone','building_address','building_url'], 'classes': ['']}),
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


