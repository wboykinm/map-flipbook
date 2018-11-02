# map-flipbook processing 

# run the image grab process
npm install
node index.js

# annotate

# create updated gifs

convert -delay 20 -loop 0 *.jpg myimage.gif

# push to S3
AWS_PROFILE=flipbook aws s3 sync img/ s3://map-flipbook/

