def f(x, y=1000, *z):
	print('x={} y={} z={}'.format(x,y,z))

f(0) # x=0, y=1000, z=()
f(0,1) # x=0, y=1, z=()
f(0,1,2) # x=0, y=1, z=(2,)
f(0,1,2,3) # x=0, y=1, z=(2,3)
f(0,1,2,3,4) # x=0, y=1, z=(2,3,4)
f(*[i for i in range(6)]) # x=0, y=1, z=(2,3,4,5)
f(*range(7)) # x=0, y=1, z=(2,3,4,5,6)

def g(x, y=0):
	print(f'x={x} y={y}')

g(x = 1) 		# x=1 y=0
g(y = 4, x = 1) # x=1 y=4
# g(y = 2) # TypeError: g() missing 1 required positional argument: 'x'


def write_rule(selector, *comments, **options):
	for c in comments:
		print(f"/* {c} */")
	
	print(selector, '{')
	for prop, value in options.items():
		print(' {}: {};'.format(prop.replace('_','-'), value))
	print('}')

write_rule('h1', 'Change all heading 1s', 'Font styles',font_family='Helvetica', size='20px')
write_rule('p.error', color='red', margin='16px', padding='0')