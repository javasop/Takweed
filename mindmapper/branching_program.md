We need to take each content of each idea and make it into its own idea.

For Example: Physical has physics and under physics there's other categories

We can tell if there's a sub category by two things:

The main category is less indented (usually by 10 or 20 or more)

of course before that by an li tag in the content

I will be using the following packages

htmlparser2 for parsing html

gulp to handle streams

programs logic goes like this:

I think we need recursion somewhere to read a tree

the recursion logic goes like this: 
		if ideas call the function
			if idea has a content with type html
				parse html
					look for <li> one by one:
						<li> with no indentation
							that's the parent
						if <li> has indentation
							that's the child of the last non-indented parent


