#pragma strict

private var anim:Animator;

function Start () {
	//get the animator component associated with the player
	anim = GetComponent(Animator);
}

function Update () {
	anim.SetBool("WalkingLeft",false);
	anim.SetBool("WalkingRight",false);
	
	//if I am moving left
	if (Input.GetAxis("Horizontal")<0)
	{
		anim.SetBool("WalkingLeft",true);
	}
	//if I am moving right
	if(Input.GetAxis("Horizontal")>0)
	{
		anim.SetBool("WalkingRight",true);
	}

}