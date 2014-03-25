#pragma strict
//on the ground
private var grounded:boolean;
private var anim:Animator;

function Start () {
	//get the animator component associated with the player
	anim = GetComponent(Animator);
	grounded = false;	
}

function OnCollisionEnter(c:Collision)
{
	if (c.gameObject.tag == "platform")
	{
		grounded = true;
	}
}

function OnCollisionExit(c:Collision)
{
	if (c.gameObject.tag == "platform")
	{
		grounded = false;
	}
}

function FixedUpdate () {
	Debug.Log(grounded);
	//push the player downwards
	rigidbody.AddForce(Vector3(0,-10,0));
	
	//horizontal movement
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	//use the space bar to jump
	if (grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		//jump
		rigidbody.AddForce(Vector3(0,500,0));
	
	}
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