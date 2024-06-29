       // Geometry for the rings
       const ringGeometry = new THREE.RingGeometry(1.2, 2, 64);

       // Load texture for Saturn's rings
       const textureLoader = new THREE.TextureLoader();
       const ringTexture = textureLoader.load('https://example.com/path-to-saturn-rings-texture.jpg'); // Replace with an actual URL

       // Material for the rings
       const ringMaterial = new THREE.MeshBasicMaterial({
           map: ringTexture,
           side: THREE.DoubleSide,
           transparent: true
       });

       // Create the mesh for the rings
       const rings = new THREE.Mesh(ringGeometry, ringMaterial);
       rings.rotation.x = Math.PI / 2;

       // Add the rings to the scene
       scene.add(rings);

       // Sphere geometry for Saturn
       const saturnGeometry = new THREE.SphereGeometry(1, 32, 32);

       // Load texture for Saturn
       const saturnTexture = textureLoader.load('https://example.com/path-to-saturn-texture.jpg'); // Replace with an actual URL

       // Material for Saturn
       const saturnMaterial = new THREE.MeshBasicMaterial({
           map: saturnTexture
       });

       // Create the mesh for Saturn
       const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

       // Add Saturn to the scene
       scene.add(saturn);

       // Set camera position
       camera.position.z = 5;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Rotate the rings and Saturn for a better view
            rings.rotation.z += 0.001;
            saturn.rotation.y += 0.001;

            // Render the scene
            renderer.render(scene, camera);
        }

        animate();