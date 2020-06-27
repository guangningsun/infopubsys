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
import string,hashlib,collections


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


# 获取所有单位信息
@api_view(['GET'])
def get_authority_list(request):
    if request.method == 'GET':
        categoryset = Category.objects.filter(level=0)
        serializer = CategorySerializer(categoryset, many=True)
        res_json = {"error": 0,"msg": {
                    "authority_info": serializer.data }}
        return Response(res_json)


@api_view(['GET'])
def get_authority_sub_list(request,id):
    if request.method == 'GET':
        categoryset = Category.objects.filter(parent_id=id)
        serializer = CategorySerializer(categoryset, many=True)
        res_json = {"error": 0,"msg": {
                    "authority_sub_info": serializer.data }}
        return Response(res_json)


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


# 获取公寓信息
@api_view(['GET'])
def get_apartment_info(request):
    if request.method == 'GET':
        apartmentset = ApartmentInfo.objects.all()
        serializer = ApartmentSerializer(apartmentset, many=True)
        res_json = {"error": 0,"msg": {
                    "apartment_info": serializer.data }}
        return Response(res_json)


# 获取楼宇信息
@api_view(['GET'])
def get_building_info(request):
    if request.method == 'GET':
        buildingset = BuildingInfo.objects.all()
        serializer = BuildingSerializer(buildingset, many=True)
        res_json = {"error": 0,"msg": {
                    "building_info": serializer.data }}
        return Response(res_json)


# 获取厂房信息
@api_view(['GET'])
def get_factory_info(request):
    if request.method == 'GET':
        factoryset = FactoryInfo.objects.all()
        serializer = FactorySerializer(factoryset, many=True)
        for i in range (0,len(serializer.data)):
            for k,v in serializer.data[i].items():
                if k == "id":
                    factory_image_list = []
                    for fi in FactoryInfo.objects.get(id=v).images.all():
                        factory_image_list.append(fi.image)
                    serializer.data[i]['image_list'] = factory_image_list
        res_json = {"error": 0,"msg": {
                    "factory_info": serializer.data }}
        return Response(res_json)


# 获取轮播图信息
@api_view(['GET'])
def get_banner_info(request):
    if request.method == 'GET':
        bannerset = BannerInfo.objects.all()
        serializer = BannerInfoSerializer(bannerset, many=True)
        res_json = {"error": 0,"msg": {
                    "banner_info": serializer.data }}
        return Response(res_json)


# 获取微信token功能
def get_access_token(request):
    if request.method == 'GET':
        APPID = 'wxed4a279d2cdba74e'
        SECRET = '4fe8c8bd6115f0adda6b33dd9c76a110'
        logger.debug("获取appid %s  secret %s" % (APPID,SECRET))
        # 获取access token
        requst_data = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+APPID+"&secret="+SECRET
        req = requests.get(requst_data)
        logger.debug("拼接的微信登录url 为 %s" % (requst_data ))
        ACCESS_TOKEN = json.loads(req.text)["access_token"]
        # 根据access token获取jsapi
        request_jsapi_data = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+ACCESS_TOKEN+"&type=jsapi"
        req_jsapi = requests.get(request_jsapi_data)
        # 待加密的字典
        signature_string = {}
        # 生成随机字符串
        noncestr=__id_generator()
        signature_string["noncestr"] = noncestr
        # 获取时间戳
        timestamp=__get_timestamp(10)
        signature_string["timestamp"] = timestamp
        # 访问页面的url
        #url = "https://brilliantlife.com.cn:8018/#/pages/service_team_list/service_team_detail"
        url = "https://brilliantlife.com.cn:8018/"
        signature_string["url"] = url
        signature_string["jsapi_ticket"] = json.loads(req_jsapi.text)["ticket"]
        # 对待加密字符串signature_string进行排序
        wait4sha1_str = __dict_sorted(signature_string)
        logger.debug("返回access token: %s jsapi: %s timstamp: %s noceStr: %s wait4sha1_str: %s" % (ACCESS_TOKEN,json.loads(req_jsapi.text)["ticket"],timestamp,noncestr,wait4sha1_str ))
        # 对待加密字符串wait4sha1_str 进行加密
        final_signature = __sha1_signature(wait4sha1_str)
        # 拼接返回值
        ret_data = {"timestamp":timestamp,
                    "nonceStr":noncestr,
                    "signature":final_signature}
        logger.debug("返回的加密字符串 %s" % (ret_data ))
        #return _generate_json_message(True,ret_data)
        return HttpResponse(json.dumps(ret_data))


# 生成随机数内部方法
def __id_generator(size=16, chars=string.ascii_letters + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

# 获取当前时间戳 内部方法
def __get_timestamp(size):
    if size==10:
        return int(time.time())
    else:
        return time.time()

# 字符串进行sha1加密 内部方法
def __sha1_signature(text):
    return hashlib.sha1(text.encode('utf-8')).hexdigest()

# 字典排序算法 内部方法
def __dict_sorted(dict_text,dec=False):
    sorted_param = json.dumps(dict_text, sort_keys=True)
    ritems = json.loads(sorted_param,object_pairs_hook=OrderedDict).items()
    conv_sign = ""
    for key, value in ritems:
        conv_sign+=str(key) + "=" + str(value) + "&"
    final_sign = conv_sign[:-1]
    return final_sign

















