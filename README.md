## Using the App

First, fork this app so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s -b 0.0.0.0 -p 3001` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`.Then run `npm start` and go to `localhost:3000` in your browser.

## Application description:
We want to make an app that help small business to better understand their business by providing them a standard webpage that can help them collect data from clients, and more importantly, to have analytics from the data collected. 

In this project, we use a barber shop as an example of small business to demostrate our skills in mainly React and Rails. But in order to scale this application we could create website for different businesses. Or if the business already have their own website, we could provide them a pluggin for analytics.

## Highlight of this app
The highlight of this app is the analytics parts. We wish we could provide as many as analytics that help business owner to make better decisions. In the demo, we provide a bar chart for daily income providing instant feedback to owner everyday. As well, we display numbers of bookings/ workload each day, so they can better arrange man power. Parts that can scale is we could also provide inventory control functionality. Also functionalities that are marketing related such as sending promotion code to certain customers

# Demo of App
!["Homepage Demo"](https://github.com/Kennethz374/Manalyze/blob/master/client/public/imgsForReadMe/Demo_Homepage.gif?raw=true)

!["Admin"](https://github.com/Kennethz374/Manalyze/blob/master/client/public/imgsForReadMe/AdminDemo.gif?raw=true)

