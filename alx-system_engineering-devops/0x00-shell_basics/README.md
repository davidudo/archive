# 0x00 Shell Basics

The objectives of doing the tasks under this topic were to know how to navigate through a file system, manipulate files, learn about some shortcuts used in bash, understand bash scripting, e.t.c. Most of the tasks require me to create a file, write a shell command in it, and make it executable. Below are the bash scripts in this directory and their function.

## Mandatory Tasks

- **0-current_working_directory:** Prints the absolute path name of the current working directory.
- **1-listit:** Displays the contents list of your current directory.
- **2-bring_me_home:** Changes the working directory to the user’s home directory.
- **3-listfiles:**  Displays current directory contents in a long format.
- **4-listmorefiles:** Displays current directory contents, including hidden files (starting with ```.```).
- **5-listfilesdigitonly:** Displays current directory contents, using long format and also displays user and group IDs displayed numerically, and hidden files (starting with ```.```).
- **6-firstdirectory:** Creates a directory named ```my_first_directory``` in the ```/tmp/``` directory.
- **7-movethatfile:** Moves the file betty from /tmp/ to /tmp/my_first_directory.
- **8-firstdelete:** Deletes the file ```betty```. The file ```betty``` is in ```/tmp/my_first_``` directory.
- **9-firstdirdeletion:** Deletes the directory ```my_first_directory``` that is in the ```/tmp``` directory.
- **10-back:** Changes the working directory to the previous one.
- **11-lists:** Lists all files (even ones with names beginning with a period character, which are normally hidden) in the current directory and the parent of the working directory and the ```/boot``` directory (in this order), in long format.
- **12-file_type:** Prints the type of the file named ```iamafile```. The file ```iamafile``` will be in the ```/tmp``` directory.
- **13-symbolic_link:** Creates a symbolic link to ```/bin/ls```, named ```__ls__```. The symbolic link is created in the current working directory. 
- **14-copy_html:** Copies all the HTML files from the current working directory to the parent of the working directory, but only copies files that did not exist in the parent of the working directory or were newer than the versions in the parent of the working directory. All HTML files have the extension ```.html``` are considered.

## Advanced Tasks
  
- **100-lets_move:** Moves all files beginning with an uppercase letter to the directory ```/tmp/u```.
- **101-clean_emacs:** Deletes all files in the current working directory that end with the character ```~```.
- **102-tree:** Creates the directories ```welcome/, welcome/to/``` and ```welcome/to/school``` in the current directory.
- **103-commas:** Lists all the files and directories of the current directory, separated by commas (```,```).
- **school.mgc:** Detects ```School``` data files. ```School``` data files always contain the string ```SCHOOL``` at offset ```0```.
