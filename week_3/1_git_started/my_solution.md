## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
	brings a file to the 'attention' of git; future changes to the file will be tracked. Used to add new files and stage existing ones

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
	"Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   week_3/1_git_started/my_solution.md"
2. Solution
	"git add week_3/1_git_started/my_solution.md"
3. Cause (explain the error)
	I didn't realize, having just used the app, that I needed to explicitly stage files with "add". Once I did so, it worked fine.
## Release 6: Reflection
	This was a pretty straightfoward challenge, but one I was a little nervous about. I had done all my version control with the GitHub app, which is a tidy GUI that takes care of some details for you—I just wasn't sure how many gaps I had to fill in here. But it was not all that hairy a beast.

	Looking up all the commands was simple as can be: I just typed "git help" into Terminal and there they all were. I did look up the difference between "fetch" and "pull" online, though. They're similar, but I couldn't tell the difference between them at all at first (now I do! See above). I did spend a little extra time working through the first 8 challenges of the LearnGitBranching app linked in the readme beforehand, just to get some concrete practice using the command line with git. I think it helped, more in terms of building comfort and confidence than in terms of producing any "Aha" moments. I think I spent more time swearing at it than thanking it, and I found the lack of a reset button infuriating when I made a misstep; still, I'm glad I took the time to do it.

	I don't find interfacing with git via the Terminal to be confusing, but it's a lot less intuitive than the app. I'm really curious to see how my opinion will shift as I use git in more and more complex ways: are we using CLI because it's better at certain git functionalities, or just because all the cool developers are doing it? Right now, the jury's still out.