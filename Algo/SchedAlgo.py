import Task
import networkx as nx
import matplotlib.pyplot as plt

def getDepGraph(Tasks: list[Task]):

    depG = nx.DiGraph()

    #add nodes for the tasks
    for t in Tasks:
        depG.add_node(t._index)

    #add edges according to the dependencies
    for t in Tasks:
        for d in t._dependencies:
            depG.add_edge(d, t._index)

    num = 0
    #get some details about the dep. graph
    for n in depG.nodes():
        for i in depG.successors(n):
            num += 1
        print("node: " + str(n) + " num of succ: " + str(num))
        num = 0

    #return the dependency graph

    nx.draw(nx.dfs_tree(depG), with_labels=True)
    plt.show()

    return depG

def saparteConnComp(depG):
    component_graphs = []
    for component in nx.weakly_connected_components(depG):
        G = nx.DiGraph()
        for node in component:
            for edge in depG.out_edges(node):
                G.add_edge(edge[0], edge[1])
        component_graphs.append(G)

    # draw(component_graphs)
    return component_graphs

def draw(graphs):
    for g in graphs:
        nx.draw(nx.dfs_tree(g), with_labels=True)
    plt.show()

def getTaskByIndx(Tasks: list[Task], i):
    for t in Tasks:
        if t._index == i:
            return t
    return None

def getPriority(t: Task):
    fib = [2, 3, 5, 8 ,13]
    weight = (fib[t._urgency] + fib[t._busVal] + fib[t._riskReduc]) / fib[t._devEffort]
    return weight

def scheduleAlgo(Tasks: list[Task]):
    ans = []
    g = getDepGraph(Tasks)
    nx.draw(nx.dfs_tree(g), with_labels=True)
    plt.show()
    ans.append(Tasks[0])

    maxWeight = 0
    maxTask = 0
    maxNode = 0
    n = list(g.nodes)[0]
    visited = []
    visited.append(n)

    while len(ans) < len(list(g.nodes)):

        for nei in g.neighbors(n):
            t = getTaskByIndx(Tasks, nei)
            weight = getPriority(t)
            if weight > maxWeight and nei not in visited:
                maxWeight = weight
                maxTask = t
                maxNode = nei

        if type(maxTask) is Task.Task and maxTask not in ans:
            ans.append(maxTask)
            visited.append(maxNode)
            if len(list(g.neighbors(maxNode))) != 0:
                n = maxNode
        else:
            if checkFamily(g, n):
                n = list(g.predecessors(n))[0]

        maxWeight = 0
        maxTask = 0
        maxNode = 0

    print(visited)
    return ans

def checkFamily(g, n):
    for nei in g.neighbors(n):
        if len(list(g.neighbors(nei))) != 0:
            return False
    return True

if __name__ == '__main__':

    t1 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 1)
    t2 = Task.Task([1], 3, 4, 3, 2, "Regex for Sign in page", "for all fields", 2)
    t3 = Task.Task([1], 2, 2, 2, 1, "Design Login Page", "info...", 3)
    t4 = Task.Task([2], 3, 2, 3, 4, "Sign in functions", "write all DB functions for sign in", 4)
    t5 = Task.Task([1], 3, 4, 3, 4, "Login functions", "write all DB functions for Login", 5)
    t6 = Task.Task([2], 3, 4, 3, 4, "Regex Login page", "for all fields", 6)

    # t1 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 1)
    # t2 = Task.Task([1], 3, 4, 3, 2, "Regex for Sign in page", "for all fields", 2)
    # t3 = Task.Task([1], 2, 2, 2, 1, "Design Login Page", "info...", 3)
    # t4 = Task.Task([2], 3, 2, 3, 4, "Sign in functions", "write all DB functions for sign in", 4)
    # t5 = Task.Task([1], 3, 4, 3, 4, "Login functions", "write all DB functions for Login", 5)
    # t6 = Task.Task([3], 3, 4, 3, 4, "Regex Login page", "for all fields", 6)

    # t1 = Task.Task([], 4, 4, 4, 3, "Design Sign in Page", "info....", 1)
    # t2 = Task.Task([1], 3, 4, 3, 2, "Regex for Sign in page", "for all fields", 2)
    # t3 = Task.Task([], 2, 2, 2, 1, "Design Login Page", "info...", 3)
    # t4 = Task.Task([2], 3, 2, 3, 4, "Sign in functions", "write all DB functions for sign in", 4)
    # t5 = Task.Task([6], 3, 4, 3, 4, "Login functions", "write all DB functions for Login", 5)
    # t6 = Task.Task([3], 3, 4, 3, 4, "Regex Login page", "for all fields", 6)

    l = [t1, t2, t3, t4, t5, t6]

    scheduleAlgo(l)
    # getDepGraph(l)






