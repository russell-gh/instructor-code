btw I'm sure you found all the bugs but the solutions are as follows. I git ignored these in the repo in case any of them decided to look for answers on my github1. In the Footer component, line 34 getYear() should be getFullYear()

2. Header component line 9, menuSwitch always sets to false.

3. Body component line 22, path should be /sessions not /session

4. Testimonials component line 15, interval should be much higher, originally it was 15000.

5. ContactLink component, line 7 Link should be to contact not contacts
