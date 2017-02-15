# -- GIT --

### -- install && setup --

##### - set global config -

  * set userName
    ```bash
    git config --global user.name <name>
    ```

  * set mail
    ```bash
    git config --global user.email <mail>
    ```

  * set global editor
    ```bash
    git config --global core.editor <editor>
    ```

  * telling git about our GPG key
    ```bash
    git config --global user.signingkey <key>
    ```

##### - check config -

  * see all of our infos
    ```bash
    git config --list
    ```

### -- basic workflow --

#### - repo init && check status -

  * start our repository
    ```bash
    git init
    ```

  * check status
    ```bash
    git status
    ```

  * add files
    ```bash
    git add <file>
    ```

    ```bash
    git add -A
    ```

  * set commit with GPG signature
    ```bash
    git commit -S -m <message>
    ```

  * view logs
    ```bash  
    git logs
    ```

  * revert/delete commits
    ```bash
    git revert <hashOfTheCommit>
    ```

#### - remote repositories

    Q - wut is it?
    A - It's a hosted repo who is not on the current machine

    Q - who can provide this kind of service.
    A - gitHub, bitBucket or gitLab

    Q - gitLab?
    A - designed to set up our own server

    Q - wut seems to be the best solution?
    A - for many reasons, it seems to be gitHub


#### - working with remote repository

  * adding a remote repository
    ```bash
    git remote add origin git@github.com:addEntry/learningRepo.git
    ```

  * check added repository
    ```bash
    git remote -v
    ```

  * tell git how to map branches
    ```bash
    git branch set-upstream-to=origin/master master
    ```

  * pushing to the repository
    ```bash
    git push
    ```
    
  * clone repository
    ```bash
    git clone <repoAdress>
    ```

#### - working with branches -

    * master branch --> stable one
    * new feature branch --> 'we' keep working along the master one
    * merge is the moment when the new feature developed along the master
      branche is ready to be include in (good practice!)

  * viewing branches
    ```bash
    git branch
    ```

  * create a new branch
    ```bash
    git branch <newBranch>
    ```

  * switch between branches
    ```bash
    git checkout <myNewbranch>
    ```

  * deleting branches
    ```bash
    git branch -d <myBranch>
    ```

  * mergin branches (take my branch and take it to the master)
    ```bash
    git merge <myBranch>
    ```
