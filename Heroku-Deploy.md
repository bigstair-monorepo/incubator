1. Create Procfile at the root of each frontend and backend folder (with command to start the server)
2. Create Heroku dynos for each (frontend and backend)

```
heroku create -a my-awesome-frontend
heroku create -a my-awesome-backend
```
3. Get the auth token from Heroku by running: `heroku auth:token` #=> **HEROKU_API_TOKEN**
4. Add remote origin for frontend and backend
```
git remote add heroku-frontend https://heroku:{ HEROKU_API_TOKEN }@git.heroku.com/my-awesome-frontend.git
git remote add heroku-backend https://heroku:{ HEROKU_API_TOKEN }@git.heroku.com/my-awesome-backend.git
```
5. Push changes to respective remote urls
Note: git subtree split is essentially saying “split this repo up so that we 
have a sub repo inside our monorepo”. The --prefix backend says “split it up so that any 
directory starting with the name “backend” splits up into this separate repo”. 
Finally the master after it says do all of this for the master branch of my code.
```
git push heroku-frontend `git subtree split --prefix frontend master`:refs/heads/master --force
git push heroku-backend `git subtree split --prefix backend master`:refs/heads/master --force

Or
# If deploying a branch other then master then use this command:
git push heroku-frontend `git subtree split --prefix frontend develop`:refs/heads/master --force
git push heroku-backend `git subtree split --prefix backend develop`:refs/heads/master --force
```

reference: 
* https://medium.com/swlh/auto-deploying-a-monorepo-to-heroku-with-github-actions-da62e8ae172c
* https://medium.com/inato/how-to-setup-heroku-with-yarn-workspaces-d8eac0db0256