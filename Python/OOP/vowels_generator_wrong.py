# Example of an INCORRECT generator implementation
def is_vowel(letter):
    return letter.lower() in ['a','e','i','o','u']

def vowels(word):
    # this is pre-computing the results 
    # rather than implementing it on-demand
    results = list(filter(lambda x: is_vowel(x), list(word)))
    while results:
        yield results.pop(0)


for v in vowels('Joanna'):
    print(v)
