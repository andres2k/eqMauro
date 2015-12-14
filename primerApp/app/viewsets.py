from app.models import Persona
from app.serializers import PersonaSerializer
from rest_framework import viewsets
import django_filters
from rest_framework import filters
from rest_framework import generics

class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'nombre', 'estado')
    # filter_class=PersonaFilter    -> PAra usar el django_filters
