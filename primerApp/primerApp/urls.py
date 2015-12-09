from django.conf.urls import patterns, include, url
from django.contrib import admin
from app.viewsets import PersonaViewSet
from rest_framework.routers import DefaultRouter

admin.autodiscover()

router = DefaultRouter()
router.register(r'personas', PersonaViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'primerApp.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include(router.urls)),
    
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)
