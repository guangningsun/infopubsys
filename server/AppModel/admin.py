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
    list_display=['id','factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num','content']
    search_fields =('factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num','content')
    fieldsets = [
       ('用户数据', {'fields': ['factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num','content'], 'classes': ['']}),
    ]
    list_per_page = 15


admin.site.register(Category , MPTTModelAdmin)

# # 厂房管理
# @admin.register(Category)
# class CategoryInfoAdmin(MPTTModelAdmin):
#     list_display=['id','name','parent','slug']
#     search_fields =('name','parent','slug')
#     fieldsets = [
#        ('用户数据', {'fields': ['name','parent','slug'], 'classes': ['']}),
#     ]
#     list_per_page = 15

admin.site.site_title = "泰达投资"
admin.site.site_header = "泰达投资"


