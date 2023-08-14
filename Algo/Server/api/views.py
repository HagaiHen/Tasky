
import json
from django.http import HttpResponse

from .SchedAlgo import scheduleAlgo 
from .Task import Task


#         taskId: task.taskId,
#         title: task.title,
#         description: task.description,
#         status: task.status,
#         sprintId: task.sprintId,
#         assigneeId: task.assigneeId,
#         publisherId: task.publisherId,
#         dependencies: task.dependencies,
#         urgency: task.urgency,
#         riskReduction: task.riskReduction,
#         devEffort: task.devEffort

def parse(request):
    # print("hhhhhhhhhh", request.body)
    my_dict = json.loads(request.body)
    # print("typeeeeee", type(dict))
    # dict = dict(dict)
    lst = []
    for i in my_dict:
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
    return lst

def main(request):
    tasks = parse(request)
    response = scheduleAlgo(tasks)
    response = {'Sched': response}
    # print("before send")    
    return HttpResponse(json.dumps(response), content_type="application/json")
