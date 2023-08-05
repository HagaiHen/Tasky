
import json
from django.http import HttpResponse

from .SchedAlgo import scheduleAlgo 
from .Task import Task

def parse(request):
    # print(json.loads(request.body))
    dict = json.loads(request.body)

    lst = []
    for i in dict:
        indx = int(i)
        dependencies = list(dict[i]['dependencies'])
        urg = dict[i]['urg']
        busVal = dict[i]['busVal']
        rr = dict[i]['riskRedu']
        devEff = dict[i]['devEff']
        t = Task(dependencies, urg, busVal, rr, devEff, "title", "desc", indx)  
        lst.append(t)
    return lst

def main(request):
    tasks = parse(request)
    response = scheduleAlgo(tasks)
    response = {'sched': response}    
    return HttpResponse(json.dumps(response), content_type="application/json")
