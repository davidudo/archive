# 0x01 Shell Permissions

The objectives of doing the tasks under this topic were to know what do the commands ```chmod```, ```sudo```, ```su```, ```chown```, ```chgrp``` do, learn about linux file permissions, how to represent each of the three sets of permissions (owner, group, and other) as a single digit, how to change permissions, owner and group of a file, how to run a command with root privileges, and how to change user ID or become superuser. Most of the tasks require me to create a file, write a shell command in it, and make it executable. Below are the bash scripts in this directory and their function.

## Mandatory Tasks

- **0-iam_betty:** Creates a script that switches the current user to the user ```betty```.
- **1-who_am_i:** Prints the effective username of the current user.
- **2-groups:** Prints all the groups the current user is part of.
- **3-new_owner:** Changes the owner of the file hello to the user betty.
- **4-empty:** Creates an empty file called ```hello```.
- **5-execute:** Adds execute permission to the owner of the file ```hello```.
- **6-multiple_permissions:** Adds execute permission to the owner and the group owner, and read permission to other users, to the file hello.
- **7-everybody:** Adds execution permission to the owner, the group owner and the other users, to the file ```hello``` .
- **8-James_Bond:** Sets the permission to the file hello as follows: Owner (no permission at all), Group (no permission at all) and Other users (all the permissions).
- **9-John_Doe:** Sets the mode of the file hello to ```-rwxr-x-wx```.
- **10-mirror_permissions:** Sets the mode of the file hello the same as olleh’s mode.
- **11-directories_permissions:** Adds execute permission to all subdirectories of the current directory for the owner, the group owner and all other users. Regular files are not changed.
- **12-directory_permissions:** Creates a directory called ```my_dir``` with permissions 751 in the working directory.
- **13-change_group:** Changes the group owner to ```school``` for the file ```hello```.

## Advanced Tasks

- **100-change_owner_and_group:** Changes the owner to ```vincent``` and the group owner to ```staff``` for all the files and directories in the working directory.
- **101-symbolic_link_permissions:** Changes the owner and the group owner of ```_hello``` to ```vincent``` and ```staff``` respectively. The file ```_hello``` is a symbolic link.
- **102-if_only:** Changes the owner of the file hello to betty only if it is owned by the user guillaume.
- **103-Star_Wars:** Plays the StarWars IV episode in the terminal.