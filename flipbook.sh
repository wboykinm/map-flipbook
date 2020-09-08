# map-flipbook processing 

# run the image grab process
npm install
node index.js

# annotate

# create updated gifs

# convert -delay 20 -loop 0 *.png myimage.gif

# push to S3
# AWS_PROFILE=flipbook aws s3 sync img/ s3://map-flipbook/

# back-annotate if necessary
for i in $(ls img/*.png); do
    PLACE=$(echo $i | cut -d'/' -f 2 | cut -d'.' -f 1)
    DATE=$(echo $i | cut -d'.' -f 2)
    convert $i -pointsize 60 -draw "gravity south fill white text 0,12 '${DATE}' fill gray text 1,11 '${DATE}' " "img/dated/${PLACE}.${DATE}.dated.png"
done
