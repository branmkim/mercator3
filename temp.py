# Open the input file in read mode
with open('temp_in.txt', 'r') as in_file:
    # Open the output file in write mode
    with open('temp_out.txt', 'w') as out_file:
        # Iterate over each line in the input file
        for line in in_file:
            # Remove any trailing newline characters
            line = line.rstrip('\n').rstrip(',').strip('[]')
            # Split the line into two integers
            e = list(map(float, line.split(',')))
            # Subtract 100 from each integer
            # e[0] -= 830
            # e[1] -= 700
            # e[0] /= 4.3
            # e[1] /= -5
            # Surround the modified line in square brackets and write it to the output file
            out_file.write(f'[{e[0]},{e[1]}],\n')