# wjcreaser.github.io

TO ADD NEW LINEUPS TO THE WEBSITE

VALORANT
1. Copy the Mapbase.html file into the map folder of the map the lineups are on
2. Rename the Mapbase.html file to CHARACTER_NAME.html where CHARACTER_NAME is the name of the character with the first letter capitalized (e.g. Kayo.html, Viper.html)
3. Insert .jpg files of the lineups into the map folder where your CHARACTER_NAME.html file is
    - Name them under the format Character_lineupIdentifier.jpg where Character is name of character and lineup identifier is a short description of use of lineup
    (Look at other .jpg files in the map folders for examples)
4. Inside the CHARACTER_NAME.html file, copy and paste:

		<div>
		<h1>Position<h1>
		<img src="src.jpg"></img>
		</div>
	
   (which is found within the body) as many times as you have lineup photos. So if you have 6 lineup photos, you need 6 separate div.

For each div representing a new lineup:
  5. Replace "Position" inbetween h1 with text describing the position and use of lineups (refer to other character.html files for examples)
  6. Replace "src.jpg" with the name of the .jpg file of the photo of the lineup
7. Save your changes and you are done

CS2
1. Access MAP_NAME.html file for desired map
2. Insert a .png file of a screenshot of your screen right before you throw the lineup (you can include two screenshots if you believe it is necessary - look at my nuke mini smoke lineup for reference) into the folder titled MAP_NAME where MAP_NAME.html exists
3. Insert a .mp4 file of a video of you walking up to the location where you throw the lineup, you throwing the lineup, and the result of the lineup. There should be 1-3 seconds of leadup in the video showing you walking to the location so that when viewing it is easily determined where the location of the lineup is
4. Inside MAP_NAME.html, underneath the header that most accurately reflects the resulting location of the lineup (e.g. ANUBIS B) copy and paste
   		<div class="map_div">
			<h2>POSITION</h2>
		</div>
		<div class="map_div">
			<img src=IMAGE_SOURCE class="map_img">
			<video class="map_vid" controls>
				<source src=VIDEO_SOURCE type="video/mp4">
			</video>
		</div>
  Where Position is broken down into MAP_NAME + SITE/LOCATION (A/B/MID etc.) + SPECIFIC_LOCATION (BENCH/ARCHES etc.) + TYPE_OF_GRENADE + (LOCATION FROM WHERE IT IS THROWN). This should be in all caps. The image and video source should be in quotations. Use my work as a reference for the format
5. Save your changes

DISCLAIMER ***: For these lineups, I have mostly only included smokes and some molotovs. This is because this is for specific lineups, so this does not include "Just throw the flash over the building towards site". Flashes and HE Nades are fine to include, but they must be specific lineups with a reason to look for the lineup, not just "Stand out in the open looking at the target and use your brain to throw it at the correct arc so it lands at the target" These should be lineups you generally can't throw on the fly with no reference and get right the majority of the time.
