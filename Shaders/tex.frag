#version 430 core
in vec2 TexCoords;
out vec4 color;

uniform sampler2D screenTexture;

void main()
{ 
    vec4 colora = texture(screenTexture, TexCoords);
	color = vec4(colora.rgb, 1.0);
}