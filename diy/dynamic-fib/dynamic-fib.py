_cache = {0: 0, 1: 1}


def calc_fib(num):
    i = 2
    while i <= num:
        if (i-1) not in _cache:
            _cache[i-1] = calc_fib(i-1)

        if (i-2) not in _cache:
            _cache[i-2] = calc_fib(i-2)

        f = _cache[i-1] + _cache[i-2]
        _cache[i] = f
        i += 1

    return _cache[num]

res1 = calc_fib(10)
print(str(res1))

res2 = calc_fib(30)
print(str(res2))
