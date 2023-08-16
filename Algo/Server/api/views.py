
import json
from django.http import HttpResponse

from .SchedAlgo import scheduleAlgo 
from .Task import Task


def parse(request):
    my_dict = json.loads(request.body)
    print("my_dict",my_dict)
    lst = []
    for i in my_dict:
        print("enterrrrr")
        i = dict(i)
        # print("element1", i)
        id = i['taskId']
        dependencies = list(i['dependencies'])
        urg = i['urgency']
        busVal = 3
        rr = i['riskReduction']
        devEff = i['devEffort']
        t = Task(dependencies, urg, busVal, rr, devEff, "title", "desc", id)  
        lst.append(t)
    print("lst", lst)
    return lst

def main(request):
    print("views")
    tasks = parse(request)
    response = scheduleAlgo(tasks)
    response = {'Sched': response}
    # print("before send")    
    return HttpResponse(json.dumps(response), content_type="application/json")
