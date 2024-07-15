import nbformat
import os

def extract_code_from_ipynb(ipynb_file, output_file):
    # Check if the input file exists
    if not os.path.isfile(ipynb_file):
        print(f"Error: The file {ipynb_file} does not exist.")
        return
    
    try:
        with open(ipynb_file, 'r', encoding='utf-8') as file:
            notebook = nbformat.read(file, as_version=4)
    except Exception as e:
        print(f"Error reading the notebook file: {e}")
        return

    code_cells = [cell['source'] for cell in notebook['cells'] if cell['cell_type'] == 'code']

    try:
        with open(output_file, 'w', encoding='utf-8') as file:
            for i, code in enumerate(code_cells, 1):
                file.write(code)
                file.write('\n\n')
        print(f"Code cells have been successfully extracted to {output_file}")
    except Exception as e:
        print(f"Error writing to the output file: {e}")

# Replace 'notebook.ipynb' and 'output.py' with your file names
extract_code_from_ipynb('RecommEngine3.ipynb', 'app.py')
#extract_code_from_ipynb('RecommEngine3.ipynb', 't.py')