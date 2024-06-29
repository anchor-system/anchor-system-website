import os

# Function to convert snake_case to Title Case
def snake_case_to_title_case(filename):
    # Remove underscores and capitalize words
    return filename.replace('_', ' ').title()

# Directory where the .chords files are located
directory = os.getcwd()

# Filter files that end with .chords
files = [f for f in os.listdir(directory) if f.endswith('.chords')]

# Dictionary to store filename to content mapping
file_contents = {}

# Iterate through each file
for filename in files:
    file_path = os.path.join(directory, filename)
    with open(file_path, 'r') as file:
        content = file.read().strip()
        # Convert filename to title case
        title_case_name = snake_case_to_title_case(os.path.splitext(filename)[0])
        # Store in dictionary
        file_contents[title_case_name] = content

# Generate JavaScript content with backticks for strings
js_content = """
const text_standards = {
%s
};
""" % ''.join(f'    "{key}": \n`{file_contents[key]}`,\n\n' for key in file_contents)

# Write to text_standards.js
with open(os.path.join(directory, 'text_standards.js'), 'w') as js_file:
    js_file.write(js_content)

print("JavaScript file 'text_standards.js' successfully created.")
