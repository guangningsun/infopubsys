from django.contrib import admin
from infoapp import views
from django.conf.urls import include, url
from django.urls import path,re_path
from django.views.static import serve
from django.conf import settings
from AppModel import admin as appadmin
from django.views.generic.base import RedirectView

urlpatterns = [
    url('admin/', admin.site.urls),
    re_path(r'^media/(?P<path>.+)$', serve, {'document_root': settings.MEDIA_ROOT}),
    path('get_teaminfo/', views.get_teaminfo),
    path('get_access_token/', views.get_access_token),
    path('get_authority_list/', views.get_authority_list),
    path('get_authority_sub_list/<id>', views.get_authority_sub_list),
    
    
] 
 
