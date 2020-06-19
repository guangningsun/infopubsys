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
        fields = ('name','parent','longitude','latitude','address','phone_number','responsibilities')