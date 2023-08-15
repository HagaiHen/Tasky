from .Task import Task
import networkx as nx
import matplotlib.pyplot as plt



# TODO: multiple dependencies - ?
# TODO: multiple trees - V
# TODO: comments and cleaning
# TODO: check extreme cases

def getDepGraph(Tasks):
    depG = nx.DiGraph()

    # add nodes for the tasks
    for t in Tasks:
        depG.add_node(t._index)


    # add edges according to the dependencies
    for t in Tasks:
        # print("t._dependencies", t._dependencies)
        for d in t._dependencies:
            d = d['value']
            # print("d", d)
            depG.add_edge(d, t._index)

    num = 0
    # get some details about the dep. graph
    for n in depG.nodes():
        for i in depG.successors(n):
            num += 1
        # print("node: " + str(n) + " num of succ: " + str(num))
        num = 0

    # return the dependency graph

    # nx.draw(depG, with_labels=True)
    # plt.show()

    return depG

# separate the whole graph to list of connected graphs
def saparteConnComp(depG):
    component_graphs = []
    for component in nx.weakly_connected_components(depG):
        G = nx.DiGraph()
        for node in component:
            for edge in depG.out_edges(node):
                G.add_edge(edge[0], edge[1])
        component_graphs.append(G)

    return component_graphs


# def draw(graph):
#     nx.draw(graph, with_labels=True)
#     plt.show()


def getTaskByIndx(Tasks, i):
    for t in Tasks:
        if t._index == i:
            return t
    return None


def getPriority(t):
    fib = [0, 2, 3, 5, 8, 13]
    weight = (fib[t._urgency] + fib[t._busVal] + fib[t._riskReduc]) / fib[t._devEffort]
    return weight

def getAllInEdges(graph, n):
    ans = []
    for u, v, data in graph.in_edges(n, data=True):
        ans.append(u)
    return ans

def scheduleAlgo(Tasks):
    ans = []
    g = getDepGraph(Tasks)

    maxWeight = 0
    maxTask = None
    maxNode = 0
    visited = []

    connectedComponent = saparteConnComp(g)
    # draw(g)

    # print(connectedComponent)

    res = []
    for g in connectedComponent:
        # TODO: find a mission without dependencies
        for i in range(len(g)):
            n = list(g.nodes)[i]
            if len(getTaskByIndx(Tasks, n)._dependencies) == 0:
                break
            if i == len(connectedComponent):
                raise RuntimeError("Can not find a task without dependencies, Check again your task dependencies")

        visited.append(n)
        ans.append(getTaskByIndx(Tasks, n))
        while len(ans) < len(list(g.nodes)):
            
            for nei in g.neighbors(n):
                # print("ansss", ans)
                t = getTaskByIndx(Tasks, nei)
                weight = getPriority(t)
                in_edges = getAllInEdges(g, nei)
                check_in_edges = True
                for i in in_edges:
                    if i not in visited:
                        check_in_edges = False
                if weight > maxWeight and nei not in visited and check_in_edges:
                    maxWeight = weight
                    maxTask = t
                    maxNode = nei

            if maxTask is not None and maxTask not in ans:
                ans.append(maxTask)
                visited.append(maxNode)
                if len(list(g.neighbors(maxNode))) != 0:
                    n = maxNode
            else:
                if checkFamily(g, n):
                    n = list(g.predecessors(n))[0]
                else:
                    all_visited = True
                    for child in g.neighbors(n):
                        if child not in visited:
                            all_visited = False
                    if all_visited:
                        if len(visited) == len(list(g.nodes)):
                            break
                        else:
                            n = list(g.predecessors(n))[0]

            maxWeight = 0
            maxTask = None
            maxNode = 0

        res.append(ans)
        ans = []
        

    # print("visited:", visited)

    # TODO: we want the shortest first or not?
    # sort by priority
    res.sort(key=lambda x: sum(getPriority(getTaskByIndx(Tasks, task._index)) for task in x), reverse=True)
    result = []
    result = printres(res)
    return result

def printres(res):
    ans = []
    for lst in res:
        for i in lst:
            ans.append(i._index)
    # print("result:", ans)
    return ans



def checkFamily(g, n):
    for nei in g.neighbors(n):
        if len(list(g.neighbors(nei))) != 0:
            return False
    return True


# if __name__ == '__main__':
#     # TODO: add parsing of the Json
#     # TODO: genarate Tasks
#     # TODO: call algo
    
#     t1 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 1)
#     t2 = Task.Task([1], 3, 4, 3, 2, "Regex for Sign in page", "for all fields", 2)
#     t3 = Task.Task([1], 2, 2, 2, 1, "Design Login Page", "info...", 3)
#     t4 = Task.Task([2], 3, 2, 3, 4, "Sign in functions", "write all DB functions for sign in", 4)
#     t5 = Task.Task([1], 3, 4, 3, 4, "Login functions", "write all DB functions for Login", 5)
#     t6 = Task.Task([2, 4], 3, 4, 3, 4, "Regex Login page", "for all fields", 6)
#     t7 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 7)
#     t8 = Task.Task([7], 4, 2, 4, 3, "Design Sign in Page", "info....", 8)

#     # t1 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 1)
#     # t2 = Task.Task([1, 3], 3, 4, 3, 2, "Regex for Sign in page", "for all fields", 2)
#     # t3 = Task.Task([1], 2, 2, 2, 1, "Design Login Page", "info...", 3)
#     # t4 = Task.Task([2], 3, 2, 3, 4, "Sign in functions", "write all DB functions for sign in", 4)
#     # t5 = Task.Task([1], 3, 4, 3, 4, "Login functions", "write all DB functions for Login", 5)
#     # t6 = Task.Task([2, 5], 3, 4, 3, 4, "Regex Login page", "for all fields", 6)
#     # t7 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 7)
#     # t8 = Task.Task([7], 4, 2, 4, 3, "Design Sign in Page", "info....", 8)

#     l = [t7, t8, t1, t2, t3, t4, t5, t6]

#     scheduleAlgo(l)