# Python code to demonstrate call by object referece (with immutable and mutable data types)

 
def change_str(str_param):
    print("Inside change_str (before)", id(str_param))
    str_param = "JCSS"
    print("Inside change_str (after):", str_param, id(str_param))

def add_more(list_param):
    list_param.append(50)
    print("Inside add_more:", list_param, id(list_param))

     
# immutable data type
my_str = "My immutable string"
change_str(my_str)
print("Outside change_str:", my_str, id(my_str))

# mutable data type
my_list = [10,20,30,40]
add_more(my_list)
print("Outside add_more:", my_list, id(my_list))

