package org.meanxhimispitalit.menaxhimispitalit.repository;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface RoomRepository extends JpaRepository<Room, String> {
    @Query("SELECT r FROM Room r WHERE r.name NOT IN :occupiedRoomNames")
    List<Room> findAvailableRooms(@Param("occupiedRoomNames") Set<String> occupiedRoomNames);
}