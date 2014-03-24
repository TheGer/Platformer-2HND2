#pragma strict
//on the ground
private var grounded:boolean;

private var anim:Animator;

function Start () {
	//get the animator component associated with the player
	anim = GetComponent(Animator);
	grounded = false;	
}

function FixedUpdate () {
	
	//if the player is in the air
	if (grounded == false)
	{
	//push the player downwards
	transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
	//horizontal movement
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	//use the space bar to jump
	if (grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		//jump
	transform.Translate(Vector3.up * 200 * Time.deltaTime);
	
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
	grounded = false;
}

function OnCollisionEnter(other:Collision)
{
	if (other.collider.gameObject.tag == "platform")
	{
		
		if (transform.position.y > other.transform.position.y)
		{
			grounded = true;
		}

	}

}

function OnCollisionStay(other:Collision)
{
	if (other.collider.gameObject.tag == "platform")
	{
		
		if (transform.position.y > other.transform.position.y)
		{
			grounded = true;
		}
	
	}

}
