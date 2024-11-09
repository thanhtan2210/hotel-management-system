from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
import django
# Create your views here.

class ServicesViewset(APIView):
    
    def get(self, request, id=None):
        if id:
            item = models.Services.objects.get(id=id)
            item = models.Cars.objects.get(id=id)
            serializer = serializers.CarsSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)


        items = models.Services.objects.all()
        serializer = serializers.ServicesSerializer(items, many=True)
      
        return Response({'status' : 'success', 'data' : serializer.data}, status=status.HTTP_200_OK)
