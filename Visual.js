noise(5,0.08).add(osc(1,0.1,1))
.color([8,5,3,8,8,7],[5,4,6,5,6,4],[2,7,3,8,6,4])
.colorama([4,0.3,1,2]
.fast(0.001))
.saturate(()=>Mate.sin(time)*2)
.kaleid(2)
.rotate(4.707)
.out(o0)