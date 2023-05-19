Final Project: News Literacy App
Name: Sarah Ling
ID: 668079

About: News Literacy App is a news headline aggregator (sourced and categorized by newscatcher API). Each headline 
       is tagged by its bias rating and factual reporting rating (About 400 sources gathered from 
       mediabiasfactcheck.com and manually entered into a csv file). 
       Users can click on the navigation bar to look at headlines from these categories: News, Politics, World, 
       Technology, Science, Business, Entertainment, or All. Users can also filter the headlines by preferred bias 
       rating or factual reporting. Users can also search for headlines in the search bar. The purpose of this app 
       is to provide users with information about the biases and factual reporting ratings of various news sources 
       so they can make more informed judgments when reading news headlines and improve on news literacy.

Technologies Used: Express Framework, Node.js, ReactJS, React-Router-Dom, React-Bootstrap, Bootstrap, Axios, 
                   Newscatcher API, deployed onto Heroku, icons sourced from icons8.com, Site logo created using
                   looka.com

Resources used: Class Lectures, Previous homework and in class assignments, expressjs documentation, 
                Bootstrap documentation, ReactJS documentation, stackoverflow.com, Newscatcher API documentation

Problems faced: Had a bit of trouble figuring out how to use Express Server with ReactJS, since the last lecture was
                skipped. But after a lot of trial and error, and looking for solutions, I figured it out. It might not
                be exactly like the lecture slides, but it works, I think. I had trouble finding a good free cloud server
                and figuring out how to deploy my app. I wish this was talked about in class.
                Unfortunately, running this app to its full potential would be costly (see comments about API costs),
                Heroku is also not free (starts from $7.00 per month).

other comments: There are two package.json files, because the client is a nested folder within the server folder.
                The outer package.json file is for the server, and the inner package.json file is for the client.

                It may be possible during use that headlines no longer generate, this is because I am on a free
                trial for newscatcher API, which only offers very limited API calls. If I wanted more calls, I
                would have to upgrade to the 500$ a month plan, which I cannot afford. I will attach screenshots
                to the app in case.