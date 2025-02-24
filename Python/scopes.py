# a = 1

# def example():
#     if a > 0:
#         b = 2
#         print(b)
#     print(b) # should this work?
#              # what's the scope for b
# def example2():
#     print(b)

# def example3():
#     global c
#     c = 3

# def example4():
#     print(c)

# # Invoking function
# example()
# example2()
# example3()
# example4()

def myfunc1():
	x = "John"
	def myfunc2():
		x = "hello"
		def myfunc3():
			nonlocal x
			print("x at myfunc3 =", x)
		myfunc3()
	
	myfunc2() 

	return x

print("x returned by myfunc1 =",myfunc1())
