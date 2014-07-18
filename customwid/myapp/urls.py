from django.views.generic import TemplateView
from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'customwid.views.home', name='home'),
    # url(r'^customwid/', include('customwid.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^$', TemplateView.as_view(template_name='myapp/index.html'), name='ui')
)
