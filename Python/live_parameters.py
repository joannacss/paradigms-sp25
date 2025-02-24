def f(x, y, z):
    print(f'x={x} y={y} z={z}')


# f(0)      			# would this work?
# f(0,1)    			# how about this?
f(0, 1, 2)  # and now?
f(y=11, x=10, z=12)  # keyword arguments
f(
    10, z=12, y=11
)  # mixing keyword arguments and positional arguments (pos. args shoulld come before kw args)
# f(x=10, 11, 12) this wont work #sad
