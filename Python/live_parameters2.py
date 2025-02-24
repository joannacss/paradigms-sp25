
def write_rule(selector, *comments, **options):
    for c in comments:
        print(f"/* {c} */")

    print(selector, '{')
    for prop, value in options.items():
        print(' {}: {};'.format(prop.replace('_', '-'), value))
    print('}')


write_rule('h1', 'Change all heading 1s', 'Font styles', font_family='Helvetica', size='20px')
write_rule('p.error', color='red', margin='16px', padding='0')

# write_rule('p', comments = 'something', "Joanna") # not work!
write_rule("p")
