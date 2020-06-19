# -*- coding: utf-8 -*-

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import viewsets, filters,permissions
from AppModel.serializer import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from collections import OrderedDict
from AppModel.models import *
from django.db.models import Avg, Count, Min, Sum
import hashlib,urllib,random,logging,requests,base64
import json,time,django_filters,xlrd,uuid
from rest_framework import status
import time, datetime
import requests,configparser
from django.conf import settings


logger = logging.getLogger(__name__)
logger.setLevel(level = logging.DEBUG)
handler = logging.FileHandler("infopubsys.log")
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)


conf_dir = settings.CONF_DIR
cf = configparser.ConfigParser()
cf.read(conf_dir)
logger.info("成功加载配置文件 %s " % (conf_dir))

# 内部方法用于返回json消息
# done
def _generate_json_message(flag, message):
    if flag:
        return HttpResponse("{\"error\":0,\"msg\":\""+message+"\"}",
                            content_type='application/json',
                            )
    else:
        return HttpResponse("{\"error\":1,\"msg\":\""+message+"\"}",
                            content_type='application/json',
                            )
                            

# 用户注册功能
@api_view(['GET', 'POST'])
def userinfo_detail(request):
    if request.method == 'GET':
        userset = UserInfo.objects.all()
        serializer = UserSerializer(userset, many=True)
        res_json = {"error": 0,"msg": {
                    "user_info": serializer.data }}
        return Response(res_json)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            res_json = {"error": 0,"msg": {
                    "user_info": serializer.data }}
            return Response(res_json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 用户注册功能
@api_view(['GET'])
def get_teaminfo(request):
    if request.method == 'GET':
        categoryset = Category.objects.all()
        serializer = CategorySerializer(categoryset, many=True)
        res_json = {"error": 0,"msg": {
                    "user_info": serializer.data }}
        return Response(res_json)





















