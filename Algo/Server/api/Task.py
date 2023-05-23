
class Task:
    _dependencies = []
    _urgency = 0
    _busVal = 0
    _riskReduc = 0
    _devEffort = 0
    _title = ""
    _desc = ""
    _index = 0


    def __init__(self, dep, urg, bv, rr, de, t, d, i):
        self._dependencies = dep
        self._urgency = urg
        self._busVal = bv
        self._riskReduc = rr
        self._devEffort = de
        self._title = t
        self._desc = d
        self._index = i