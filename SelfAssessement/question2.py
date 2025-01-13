def text_to_tree(expression: str) -> list:
    # ... solution here ...

def print_output(output: list) -> None:
    for line in output:
        print(line)


if __name__ == "__main__":
    expression = "2*7+3"  # Test 1
    output = text_to_tree(expression)
    print_output(output)
