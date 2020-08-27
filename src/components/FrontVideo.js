import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap';
import styled from "styled-components";


const StyledPlayer = styled.div`
	display: block-inline

`

export default function FrontVideo() {

	const [video, setVideo] = useState([
		"https://imdb-video.media-imdb.com/vi3074735641/1434659607842-pgv4ql-1598144675262.mp4?Expires=1598532771&Signature=AG8VtriCvW8tjH-mH9yKV4hrWRaT7ir8xk7HjlixOM38uFPgxgo-ti03gG7M9nbr3JgQpG6QE7WIv7lS-cBLSZxMxUVSsvpGRCwu8fAgtexXz0AbT8gG6mel5c1p8gX3ZhjmJLRBx0lMYkj87C0KuMcaYFMpv8~reCNUOTkPbtjP7r2X9DeWEFy7oxIXQmVZZOLkS18rsm3vI6V81r8pXl6Am0-I-PZFAh5IIsAzC~~kfNAcRe18sXP0EvFnTMEOTXzeKOhpImky-Elb77WEX3xBIXvTuvpyVzd8TePeY1IQhupeMgTYqMc9zf4DBNrAN7qNaM5jYpFK2LYh5ND7TQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
		"https://imdb-video.media-imdb.com/vi1481096729/1434659607842-pgv4ql-1598360296623.mp4?Expires=1598534375&Signature=DEBnFndODg-z21t9dzXPVYJWHMxA6GAK6ZbYwllpObcp-WAB1f82nHq4td7bRn7O3Clo3JgK0KmRvHncKSwO8cSj0PXICVchxofGEumU6hk61AlH60-j2iWQCWP1s8Pwvfu3dhcVOk9yF8A6z74HkcBjUNdXkv~EqbF~vGmcOO6loSizVhiytahpkjXb0kRM~MkV7-AbCFJJVu2tDuHaVjJ~i4FvTqCK~cgl8Bc6FHuqcsiKRE92Mvm4kXvguB4ItjRNQ-Zry3ei0CDS3WgjR5oVtsiUDLKgG29D61VAdOGfkhSTvTv40uPw8FA97EvxHuMKKg9Wx4yzoZwMMyG4uw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
		"https://imdb-video.media-imdb.com/vi2286337561/1434659607842-pgv4ql-1598305374537.mp4?Expires=1598534449&Signature=LHK11VbMGFMkJAWSEHETkX4hrZf63N7UuyQ-XtGRDs5yFpVPg8oLMze6RVg0REoof2EWxg~5OxHwhHSSt0DSW~GDq-A8SpxPcQy19LFGxhdyEmHMwzUwzwmimuvq6hbZ7BYl~INPGla-qpu53-o6-bz4GG~ztjgk7VT5gx7cjZ7EnyrpX2us9O39MmT8-L92dGy6k5OQpYfppLFfgp9OMNg6zO5AMIPf-u4rDgnitgjMP8TqbZFTNs~NQ~8k2iYG23DVz1N-FaU84PniQANZXIDLch1NfqAStmJ8nSbukofCKvjZO9OfUOZmEwz4N3YwujWvNZPDqROpyD~e9GDL0A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
		"https://imdb-video.media-imdb.com/vi1078443545/1434659607842-pgv4ql-1598370401114.mp4?Expires=1598534477&Signature=Uj~KehIOEgX3qS7sbMsb1dtWD3JgzMMhLRXqyv0IEZjjfaLBTrZc0eDIOn39hsyXMXgfV66nJfsSf7iaunkthvGhFlxKbEge4Wb2mltmPV~29nZI6lBEIxyw~-abr~UiUpgkmHdj1aX32nsF1rWfvyk74UnVzjrMCd~DF69l8N1eFpQjkkn-RCisLcxQDfW46YtPofpBuUMZc5l3hGg131f6An2HzsJh8VawfX10WtYAw9PkI8ePrljiPppQ4LmaolksLY~y~ltvzOV7HPX5cnYRJmZ3tZ8fqwQexEr-jBgUiZ3H7VP-Llzqhzdu7S5ytr9Nw7x-wZGM-Dd7lw5Q-A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
	])



	const nextVideo = e => {
		e.preventDefault();
		setVideo(video => [...video.slice(1, 4), video[0]]);
	}



	return (
		<StyledPlayer>
			<ReactPlayer
				url={video[0]}
				playing={false}
				volume={1}
				controls={true}
			/>
			<Button onClick={nextVideo}>Next Trailer</Button>{' '}
		</StyledPlayer>
	)
}
