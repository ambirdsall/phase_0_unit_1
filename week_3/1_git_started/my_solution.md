## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
	brings a file to the 'attention' of git; future changes to the file will be tracked

#### branch
	creates a new 'thread' to track changes in the repo, allowing parallel development. Also lets you manipulate preexisting branches.

#### checkout
	navigates to a given branch or commit

#### clone
	creates a separate copy of a repo, its history, and its branches. Good for making a local copy of a remote project you can work on

#### commit
	creates a 'snapshot' of your work in progress, logging any changes from the previous version

#### fetch
	downloads changes and, if necessary, files from a remote source but does not merge them

#### log
	shows the history of commits

#### merge
	incorporates commits from a given branch; unites two development paths

#### pull
	fetches and merges from a given source in one go

#### push
	updates changes to a remote repo

#### reset
	moves HEAD back to specified commit

#### rm
	The opposite of add; "removes files from working tree and index" seems about right, so I'll just copy from git help

#### status
	shows status of working tree: where you are, whether there are uncommitted changes or whatnot

## Release 4: Git Workflow

- Push files to a remote repository
	git remote add (short name) {url}
	git push (name)

- Fetch changes
	git fetch (name: origin is the default for cloned repos)

- Commit locally
	git add (filename)
	git commit -m (message)

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection