export class OutlineShaders
{
    public static Vertex : string = `
        #define PI 3.14159265359
        #define PI2 6.28318530718
        #define PI_HALF 1.5707963267949
        #define RECIPROCAL_PI 0.31830988618
        #define RECIPROCAL_PI2 0.15915494
        #define LOG2 1.442695
        #define EPSILON 1e-6
        
        #define saturate(a) clamp( a, 0.0, 1.0 )
        #define whiteCompliment(a) ( 1.0 - saturate( a ) )
        
        float pow2( const in float x ) { return x*x; }
        float pow3( const in float x ) { return x*x*x; }
        float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
        float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
        // expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
        // do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
        highp float rand( const in vec2 uv ) {
            const highp float a = 12.9898, b = 78.233, c = 43758.5453;
            highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
            return fract(sin(sn) * c);
        }
        
        struct IncidentLight {
            vec3 color;
            vec3 direction;
            bool visible;
        };
        
        struct ReflectedLight {
            vec3 directDiffuse;
            vec3 directSpecular;
            vec3 indirectDiffuse;
            vec3 indirectSpecular;
        };
        
        struct GeometricContext {
            vec3 position;
            vec3 normal;
            vec3 viewDir;
        };
        
        vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
        
            return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
        
        }
        
        // http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
        vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
        
            return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
        
        }
        
        vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
        
            float distance = dot( planeNormal, point - pointOnPlane );
        
            return - distance * planeNormal + point;
        
        }
        
        float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
        
            return sign( dot( point - pointOnPlane, planeNormal ) );
        
        }
        
        vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
        
            return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
        
        }
        
        mat3 transposeMat3( const in mat3 m ) {
        
            mat3 tmp;
        
            tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
            tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
            tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
        
            return tmp;
        
        }

        uniform float factor;

        #if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
        
            varying vec2 vUv;
            uniform mat3 uvTransform;
        
        #endif

        #ifdef USE_COLOR
        
            varying vec3 vColor;
        
        #endif

        #ifdef USE_SKINNING
        
            uniform mat4 bindMatrix;
            uniform mat4 bindMatrixInverse;
        
            #ifdef BONE_TEXTURE
        
                uniform sampler2D boneTexture;
                uniform int boneTextureSize;
        
                mat4 getBoneMatrix( const in float i ) {
        
                    float j = i * 4.0;
                    float x = mod( j, float( boneTextureSize ) );
                    float y = floor( j / float( boneTextureSize ) );
        
                    float dx = 1.0 / float( boneTextureSize );
                    float dy = 1.0 / float( boneTextureSize );
        
                    y = dy * ( y + 0.5 );
        
                    vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
                    vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
                    vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
                    vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
        
                    mat4 bone = mat4( v1, v2, v3, v4 );
        
                    return bone;
        
                }
        
            #else
        
                uniform mat4 boneMatrices[ MAX_BONES ];
        
                mat4 getBoneMatrix( const in float i ) {
        
                    mat4 bone = boneMatrices[ int(i) ];
                    return bone;
        
                }
        
            #endif
        
        #endif

        #if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
            varying vec3 vViewPosition;
        #endif

        void main() {
            
            #if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
            
                vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
            
            #endif

            #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
            
                vUv2 = uv2;
            
            #endif

            #ifdef USE_COLOR
            
                vColor.xyz = color.xyz;
            
            #endif

            #ifdef USE_SKINNING
            
                mat4 boneMatX = getBoneMatrix( skinIndex.x );
                mat4 boneMatY = getBoneMatrix( skinIndex.y );
                mat4 boneMatZ = getBoneMatrix( skinIndex.z );
                mat4 boneMatW = getBoneMatrix( skinIndex.w );
            
            #endif
        
            vec3 objectNormal = vec3( normal );

            #ifdef USE_SKINNING
            
                mat4 skinMatrix = mat4( 0.0 );
                skinMatrix += skinWeight.x * boneMatX;
                skinMatrix += skinWeight.y * boneMatY;
                skinMatrix += skinWeight.z * boneMatZ;
                skinMatrix += skinWeight.w * boneMatW;
                skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
            
                objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
            
            #endif

            vec3 transformedNormal = normalMatrix * objectNormal;
            
            #ifdef FLIP_SIDED
            
                transformedNormal = - transformedNormal;
            
            #endif

            vec3 transformed = vec3( position ); 

            vec3 movePosition = vec3(position.x + normal.x * factor, position.y + normal.y * factor, position.z + normal.z * factor);
            
            vec4 skinVertex = bindMatrix * vec4( movePosition, 1.0 );
            
            vec4 skinned = vec4( 0.0 );
            skinned += boneMatX * skinVertex * skinWeight.x;
            skinned += boneMatY * skinVertex * skinWeight.y;
            skinned += boneMatZ * skinVertex * skinWeight.z;
            skinned += boneMatW * skinVertex * skinWeight.w;
        
            transformed = ( bindMatrixInverse * skinned ).xyz;

            vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
            
            vec4 cPosition = projectionMatrix * mvPosition;
            
            #if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
                vViewPosition = - mvPosition.xyz;
            #endif

            gl_Position = cPosition;
        }
        `;
    public static Fragment : string = `
        uniform vec4 color;
        varying vec2 vUv;
        void main()
        {
            gl_FragColor = color;
        }
        `;
}