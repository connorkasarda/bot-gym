# Import packages for code speed up, calculations, and performance tests
from numba import jit
import numpy as np
import time

# Begin with a 10 x 10 matrix
x = np.arange(100).reshape(10, 10)

# Define typical python function without Numba support
def go_slow(a):
    trace = 0.0
    for i in range(a.shape[0]):
        trace += np.tanh(a[i, i])
    return a + trace

# Define python function with Numba support
@jit(nopython=True)
def go_fast(a):
    trace = 0.0
    for i in range(a.shape[0]):
        trace += np.tanh(a[i, i])
    return a + trace

# Show runtime of fast function with compilation time included
start = time.perf_counter()
go_fast(x)
end = time.perf_counter()
print("Fast Function: time elapsed (with compilation) = {}s".format(end - start))

# Show runtime of fast function without compilation time included
start = time.perf_counter()
go_fast(x)
end = time.perf_counter()
print("Fast Function: time elapsed (after compilation) = {}s".format(end - start))

# Show runtime of slow function
start = time.perf_counter()
go_slow(x)
end = time.perf_counter()
print("Slow Function: time elapsed = {}s".format(end - start))