var is_colliding = function( __piece, _area ) {
	// Div 1 data
	var d1_offset             = $("#" + __piece).offset();
	var d1_height             = $("#" + __piece).outerHeight( true );
	var d1_width              = $("#" + __piece).outerWidth( true );
	var d1_distance_from_top  = d1_offset.top + d1_height;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = $("#" + _area).offset();
	var d2_height             = $("#" + _area).outerHeight( true );
	var d2_width              = $("#" + _area).outerWidth( true );
	var d2_distance_from_top  = d2_offset.top + d2_height;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};