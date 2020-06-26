from rest_framework import serializers
from AppModel.models import *
from rest_framework.decorators import api_view


class FactoryInfoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FactoryInfo
        fields = ('factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id','name','parent','longitude','latitude','address','phone_number','responsibilities')


class ApartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ApartmentInfo
        fields = ('id','apartment_region','apartment_title','apartment_phone','apartment_address','apartment_url')


class BuildingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = BuildingInfo
        fields = ('id','building_region','building_title','building_phone','building_address','building_url')


class FactorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = FactoryInfo
        fields = ('id','factory_name','factory_area','factory_footprint','factory_address','factory_longitude','factory_latitude','factory_level','factory_high','factory_finish_time','factory_desc','factory_user','factory_phone_num')


class BannerInfoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = BannerInfo
        fields = ('id','banner_image')
